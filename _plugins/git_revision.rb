# frozen_string_literal: true

require 'open3'

module Jekyll
  # Exposes the current git revision metadata to Liquid as `site.git`:
  #   site.git.short / .full / .author / .email / .date / .subject
  #
  # Resolution order:
  #   1. `git log -1 HEAD` (local + GH Actions checkout)
  #   2. ENV['GITHUB_SHA'] alone (degraded — no metadata)
  #   3. "unknown" fallback so the layout never blows up.
  module GitRevision
    module_function

    def call(cmd)
      out, status = Open3.capture2e(*cmd)
      status.success? ? out : nil
    rescue Errno::ENOENT
      nil
    end

    def detect
      combined = call(['git', 'log', '-1', '--format=%H%n%an%n%ae%n%ad%n%s', 'HEAD'])
      if combined && !combined.empty?
        full, author, email, date, subject = combined.chomp.split("\n", 5)
        return {
          'short'   => full[0, 7],
          'full'    => full,
          'author'  => author.to_s,
          'email'   => email.to_s,
          'date'    => date.to_s,
          'subject' => subject.to_s
        }
      end

      sha = ENV['GITHUB_SHA']
      if sha && !sha.empty?
        return {
          'short'   => sha[0, 7],
          'full'    => sha,
          'author'  => '',
          'email'   => '',
          'date'    => '',
          'subject' => ''
        }
      end

      {
        'short'   => 'unknown',
        'full'    => 'unknown',
        'author'  => '',
        'email'   => '',
        'date'    => '',
        'subject' => ''
      }
    end
  end
end

Jekyll::Hooks.register :site, :after_init do |site|
  site.config['git'] = Jekyll::GitRevision.detect
end
