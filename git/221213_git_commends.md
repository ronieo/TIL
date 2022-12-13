# GIT BASH 1

## GIT BASH 1-1 : basic

- pwd : print working directory
- / : delimiter 구분자
- CLI : Command Line Interface
- GUI : Graphic User Interface
- ls : show current list
- cd : change directory (하위폴더로)
- mkdir : make directory
- cd .. : 상위 디렉토리로
- cd ../.. : 상위 몇단계씩 파일경로 올라가기

###**명령을 진행하는 과정에서 이벤트를 잘 살펴야한다**
###**이동은 폴더(directory)단위로만 가능**


## GIT BASH 1-2 : create new file / move file

- touch : ex) touch example.txt <- create new text file
- mv : move file ex) mv index.html public(<-destination of html file)
- mv ../filename . : get a file of parent folder in current position

###*텍스트 기반의 파일이 아닌 실행(응용)프로그램을 통해서만 열수 있는 파일은 생성을 하더라도 열수 없음*


## GIT BASH 1-3 : copy/delete

- cp : ex) cp index.html ./index-copy.html
	- copy this file in current position as other filename
	ex) cp app.js ../app-copy.js
	- copy this file in parent folder as other filedname
- rm : rm filname
- rm *.* : remove allOfName.allOfExtension
- rm -r dirName : It's possible after remove all files to remove dir


## GIT BASH 1-4 : change Name

- mv: ex) mv app.js main.js => resulte : main.js changed
- clear : window clear

### cat: cat filename => show the contents of file


## VIM

- vi filename : open in vim
- i : go to INSERT MODE
- esc : go to NORMAL MODE
- ` : If you want to highlight, use backquate
- :q => not yet save/ hope don't save => :q!
- :wq => save th current satus
