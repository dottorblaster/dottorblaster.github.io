require 'date'

class Default < Thor

  no_commands do

    def post_name(path)
      return File.basename(path).split("-").drop(3).join("-")
    end

    def combine(path, name)
      return File.dirname(path) + "/" + name
    end

    def dateify(name)
      return Date.today().to_s() + "-" + name
    end

  end

  
  desc 'go', 'Serves the blog locally through Jekyll\'s embedded server'
  def go
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
  
  desc 'refresh PATH', 'Updates a given file path to match current date'
  def refresh(path)
    newpath = combine(path, dateify(post_name(path)))
    File.rename(path, newpath)
    puts("Refreshed file: #{newpath}")
  end

end
