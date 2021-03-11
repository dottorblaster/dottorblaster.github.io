# frozen_string_literal: true

require 'rmagick'
require 'rickshaw'

module Jekyll
  # Autopreview plugin for Jekyll. Absolutely homebrew.
  # This takes some infos like post title/date and generates an opengraph preview.
  class Autopreview < Liquid::Tag
    def render(context)
      id = context['page']['id'].to_sha1
      site = context.registers[:site]
      baseurl = site.config['url']

      if File.exist?("#{Dir.pwd}/opengraph/#{id}.png")
        puts "Preview exists: #{id}.png"
      else
        generate_image(id, context)
        site.static_files << Jekyll::StaticFile.new(site, site.source, '/opengraph/', "#{id}.png")
      end

      "<meta content=\"#{baseurl}/opengraph/#{id}.png\" property=\"og:image\">"
    end

    def generate_image(id, context)
      background = Magick::ImageList.new("#{Dir.pwd}/public/cover-background.png")

      annotate(background, "#{context['page']['date']} \n", Magick::SouthEastGravity)
      annotate(background, "→ dottorblaster.it\n", Magick::SouthWestGravity)

      text = generate_title_layer(context)

      final_image = background.composite(text, Magick::CenterGravity, 0, 0, Magick::OverCompositeOp)

      final_image.write("#{Dir.pwd}/opengraph/#{id}.png")
    end

    def annotate(image, text, gravity)
      tinytext = Magick::Draw.new
      image.annotate(tinytext, 0, 0, 0, 0, text) do
        tinytext.gravity = gravity
        tinytext.pointsize = 20
        tinytext.fill = '#FFFFFF'
        tinytext.font = 'JetBrains-Mono-Bold'
      end
    end

    def generate_title_layer(context)
      Magick::Image.read("caption:#{context['page']['title']}") do
        self.fill = '#FFFFFF'
        self.font = 'JetBrains-Mono-Bold'
        self.pointsize = 40
        self.size = '1100x630'
        self.gravity = Magick::CenterGravity
        self.background_color = 'none'
      end.first
    end
  end
end

Liquid::Template.register_tag('autopreview', Jekyll::Autopreview)
