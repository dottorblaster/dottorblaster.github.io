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
        puts "Preview exists: #{id}.png"
      else
        background = Magick::ImageList.new("#{Dir.pwd}/public/cover-background.png")

        tinytext = Magick::Draw.new
        background.annotate(tinytext, 0,0,0,0, "#{context["page"]["date"]} \n") do
          tinytext.gravity = Magick::SouthEastGravity # Text positioning
          tinytext.pointsize = 20
          tinytext.fill = "#FFFFFF" # Font color
          tinytext.font = "JetBrains-Mono-Bold" # Font file; needs to be absolute
        end

        background.annotate(tinytext, 0,0,0,0, "→ dottorblaster.it\n") do
          tinytext.gravity = Magick::SouthWestGravity # Text positioning
          tinytext.pointsize = 20
          tinytext.fill = "#FFFFFF" # Font color
          tinytext.font = "JetBrains-Mono-Bold" # Font file; needs to be absolute
        end

        # Create a caption of the title in a smaller area and center aligned.
        text = Magick::Image.read("caption:#{context["page"]["title"]}") {
            self.fill = '#FFFFFF'
            self.font = "JetBrains-Mono-Bold"
            self.pointsize = 40
            self.size = "1100x630"
            self.gravity = Magick::CenterGravity
            self.background_color = "none"
        }.first

        # Composite the two images over each other (witht the smaller text image being centred)
        final_image = background.composite(text, Magick::CenterGravity, 0,0, Magick::OverCompositeOp)

        # Write out the file
        final_image.write("#{Dir.pwd}/opengraph/#{id}.png")
        site.static_files << Jekyll::StaticFile.new(site, site.source, "/opengraph/", "#{id}.png")
      end

      "<meta content=\"#{uri}\" property=\"og:image\">"
    end
  end
end

Liquid::Template.register_tag('autopreview', Jekyll::Autopreview)
