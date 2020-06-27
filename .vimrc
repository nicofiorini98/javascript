set nocompatible              " be iMproved, required

set encoding=utf-8
set number relativenumber
set scrolloff=4
set autoindent
set showcmd     "Mostra i comandi incompleti nell'angolo in basso a destra dello schermo
set history=50

set splitright

set noerrorbells
set nowrap
"Opzioni per non far spezzare le linee
set linebreak
set textwidth=0
set wrapmargin=0

set noswapfile
set nobackup
set undodir=~/.vim/undodir
set undofile

set colorcolumn=80,100,120
highlight ColorColumn ctermbg=0 guibg=lightgrey

"Opzioni per ricerca con /
set hlsearch
set incsearch
set smartcase   "Attiva case sensitive se nella ricerca e' presente una maiuscola 

"Disattivo l'evidenziazione della ricerca
nnoremap ,m :nohlsearch<CR>  

"Substitute tabs with 4 spaces
set expandtab shiftwidth=4
set softtabstop=4

"Set autocomplete
set wildmode=longest,list,full
set wildmenu  "Menu di autocomplete quando sto inserendo un programma

"Remap commands for changing window in split mode
map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l
	
"Sposto il cursore sul placeholder e lo cancella
inoremap ;; <Esc>/<++><Enter>"_c4l

"Shortcut per copia e incolla con cntr+c e cntr+a
vnoremap <C-c> "+y
vnoremap <C-x> "+d
nnoremap <C-a> "+p

"Crea template funzione in C
autocmd FileType c inoremap ;t <Esc>I(<++>)<Space>{<Enter>}<Esc>O<++><Esc>kI
autocmd Filetype c inoremap ;i <Esc>I#include<Space><><Left>
autocmd FileType c inoremap ;d <Esc>I#define<Space>
autocmd FileType c inoremap ;f for(<++>;<Space><++>;<Space><++>){<Enter><++>}<Esc>kI

autocmd FileType nroff inoremap <C-h> \[']<Space><++><Esc>5hi
autocmd FileType nroff inoremap <C-g> \[*]<Space><++><Esc>5hi
autocmd FileType nroff inoremap <C-b> \[]<Space><++><Esc>5hi
autocmd FileType nroff inoremap <C-y> $$<Space><++><Esc>5hi

autocmd BufWritePost *.ms :! groff -e -ms -Tpdf %:p > %:r.pdf; evince %:r.pdf & disown
autocmd BufWritePost *.pl :vert term ++close swipl %:p
autocmd BufWritePost *.py :vert term python3 %:p


"Plugin
call plug#begin('~/.vim/plugged')

Plug 'morhetz/gruvbox' "Colorscheme
Plug 'jremmen/vim-ripgrep' "grep veloce
Plug 'tpope/vim-fugitive' "Per vedere diff, logs, etc..
Plug 'vim-utils/vim-man' "man pager per vim
Plug 'kien/ctrlp.vim' "ctrl+p per file finding veloce
Plug 'ycm-core/YouCompleteMe' "Per autocomplete in vari linguaggi
Plug 'mbbill/undotree'
Plug 'XVilka/prolog-vim'
Plug 'vim-syntastic/syntastic'
Plug 'vim-airline/vim-airline'
Plug 'vimwiki/vimwiki'

call plug#end()



colorscheme gruvbox
set background=dark

if executable('rg')
    let g:rg_derive_root='true'
endif

let g:ctrlp_user_command = ['.git/', 'git --git-dir=%s/.git ls-files -oc --exclude-standard']
let mapleader = " "
let g:newtrw_browse_split = 2
let g:newtrw_banner = 0
let g:newtrw_winsize = 25

let g:ctrlp_use_caching = 0


