" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
  if &t_Co > 2 || has("gui_running")
    syntax on
    set hlsearch
  endif

" Turn backup off, since most stuff is in SVN, git et.c anyway...
  set nobackup
  set nowb
  set noswapfile

" Auto-indent, smart indent and wrap lines
  set ai
  set si
  set wrap
  set visualbell
  set mouse=a
  set nu

" Indentation settings for using 2 spaces instead of tabs
" Other stuff like smarttab
  set shiftwidth=2
  set softtabstop=2
  set expandtab
  set smarttab
  set backspace=2

" Pathogen infect IoC injection
execute pathogen#infect()

" Access colors present in 256 colorspace

" Colorscheme. I'll set base16-tomorrow
" You need to install it first.
" Here the link: https://github.com/chriskempson/base16-vim
