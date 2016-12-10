require 'date'

task default: %w[build]

task :run do
	sh "jekyll serve"
end

task 'build' do
	sh "jekyll build"
end

task :new, [:title] do |t, args|
	fn = "_posts/#{Date.today().to_s()}-#{args.title || "slug"}.md"
	File.new(fn, "w")
	puts("Successfully create file: #{fn}")
end
