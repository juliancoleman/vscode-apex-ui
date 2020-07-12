
# adobe
alias photoshop='open -a Adobe\ Photoshop\ CC\ 2014'

# trash
alias trash=rmtrash

# cd
alias .. ='cd ..'
alias ...='cd ../..'

# utils
alias sum="awk '{ sum += \$1 } END { print sum }'"
alias mean="awk '{ sum += \$1 } END { print sum / NR }'"

# curl
alias curl='curl -#'

# burl
alias GET='burl GET'
alias HEAD='burl -I'
alias POST='burl POST'
alias PUT='burl PUT'
alias PATCH='burl PATCH'
alias DELETE='burl DELETE'
alias DEL='burl DELETE'
alias OPTIONS='burl OPTIONS'

# jobs
alias kj='jobs -p | xargs kill'

# misc
alias w='watch -q make &'
alias ll='ls -lah'
alias less='less -R'

# editors
alias s='subl'
alias m='mate'

# clipboard
alias copy="pbcopy"
alias paste="pbpaste"

# default
export GO_DEFAULT=tj

#
# Go to a <repo> in ~/dev
#
