require 'rmagick'
require 'rickshaw'

module Jekyll
  class Autopreview < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super(tag_name, text, tokens)
    end

    def render(context)
      id = context["page"]["id"].to_sha1

      if(File.exist?("#{Dir.pwd}/opengraph/#{id}.png"))
        puts "File exists #{Dir.pwd}/opengraph/#{id}.png}"
      else
        # Create an image list from ImageMagic using the base image
        img = Magick::ImageList.new
        img.new_image(800, 500) { self.background_color = "#1D1F21" }

        # Create a caption of the title in a smaller area and center aligned.
        text = Magick::Image.read("caption:#{context["page"]["title"]}") {
            self.fill = '#FFFFFF'
            self.font = "DejaVuSans"
            self.pointsize = 40
            self.size = "800x500"
            self.gravity = Magick::CenterGravity
            self.background_color = "none"
        }.first

        # Composite the two images over each other (witht the smaller text image being centred)
        final_image = img.composite!(text, Magick::CenterGravity, 0,0, Magick::OverCompositeOp)

        # Write out the file
        final_image.write("#{Dir.pwd}/opengraph/#{id}.png")
      end

      site = context.registers[:site]

      # Add the file to the list of static_files needed to be copied to the _site
      site.static_files << Jekyll::StaticFile.new(site, site.source, "/opengraph/", "#{id}.png")

      uri = "/opengraph/#{id}.png"
      "<meta content=\"#{uri}\" property=\"article:section\">"
    end
  end
end
Liquid::Template.register_tag('autopreview', Jekyll::Autopreview)
