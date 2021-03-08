# frozen_string_literal: true

require 'date'
require 'colorize'
require 'burstfm'

# Default class needed for Thor instrumentation
class Default < Thor
  no_commands do
    def post_name(path)
      File.basename(path).split('-').drop(3).join('-')
    end

    def combine(path, name)
      "#{File.dirname(path)}/#{name}"
    end

    def dateify(name)
      "#{Date.today}-#{name}"
    end
  end

  desc 'serve', 'Serves the blog locally through Jekyll\'s embedded server'
  def serve
    exec('jekyll serve')
  end

  desc 'build', 'Builds the static site'
  def build
    exec('jekyll build --trace')
  end

  desc 'new SLUG', 'Creates a new post with the provided slug'
  def new(slug)
    datename = dateify(slug)
    filename = "_posts/#{datename}.md"
    File.new(filename, 'w')
    puts('Created file: '.green + filename.to_s.yellow)
  end

  desc 'refresh PATH', 'Updates a given file path to match current date'
  def refresh(path)
    newpath = combine(path, dateify(post_name(path)))
    File.rename(path, newpath)
    puts("Refreshed file: #{newpath.yellow}")
  end

  desc 'fm', 'Generates front-matter YAML for a new post'
  option :title
  def fm
    puts '---'
    Burstfm.print({ title: options[:title] })
    puts '---'
  end
end
