require 'rmagick'
require 'rickshaw'

module Jekyll
  class Autopreview < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super(tag_name, text, tokens)
    end

    def render(context)
      id = context["page"]["id"].to_sha1
      site = context.registers[:site]
      baseurl = site.config['url']
      uri = "#{baseurl}/opengraph/#{id}.png"

      if(File.exist?("#{Dir.pwd}/opengraph/#{id}.png"))
        puts "File exists #{Dir.pwd}/opengraph/#{id}.png}"
      else
        # Create an image list from ImageMagic using the base image
        background = Magick::Image.read("caption:#{context["page"]["date"]}") {
            self.fill = '#FFFFFF'
            self.font = "JetBrains-Mono-Bold"
            self.pointsize = 13
            self.size = "1200x630"
            self.gravity = Magick::SouthEastGravity
            self.background_color = "#1D1F21"
        }.first

        # Create a caption of the title in a smaller area and center aligned.
        text = Magick::Image.read("caption:#{context["page"]["title"]}") {
            self.fill = '#FFFFFF'
            self.font = "JetBrains-Mono-Bold"
            self.pointsize = 40
            self.size = "1200x630"
            self.gravity = Magick::CenterGravity
            self.background_color = "none"
        }.first

        # Composite the two images over each other (witht the smaller text image being centred)
        final_image = background.composite(text, Magick::CenterGravity, 0,0, Magick::OverCompositeOp)

        # Write out the file
        final_image.write("#{Dir.pwd}/opengraph/#{id}.png")
      end

      site.static_files << Jekyll::StaticFile.new(site, site.source, "/opengraph/", "#{id}.png")

      "<meta content=\"#{uri}\" property=\"og:image\">"
    end
  end
end

Liquid::Template.register_tag('autopreview', Jekyll::Autopreview)
