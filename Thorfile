require 'date'

class Default < Thor
  
  desc 'up', 'Serves the blog locally through Jekyll\'s embedded server'
  def up
    exec("jekyll serve")
  end

  desc 'build', 'Builds the static site'
  def build
    exec("jekyll build")
  end

  desc 'new SLUG', 'Creates a new post with the provided slug'
  def new(slug)
    filename = "_posts/#{Date.today().to_s()}-#{slug}.md"
    File.new(filename, "w")
    puts("Created file: #{filename}")
  end

end

