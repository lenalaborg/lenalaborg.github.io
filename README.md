# lenalaborg.github.io

## 신규 버전 작업 가이드

### 화면 / 메뉴 트리용 md 파일 생성
경로 : /content/docs/{version}
방법 : 신규 버전 디렉토리 생성 후 _index.md, installation.md, userguid.md 파일 생성

### 화면용 html 파일 추가 / 변환 작업
#### html 파일 추가
경로 : /static/_includes/{version}  
방법 : 신규 버전 디렉토리 생성 후 000.installation_vmhost.html, manual_exclusive.html, release_note.html 파일을
jenkins 에서 받아 /static/_includes/{version} 디렉토리에 추가

- jenkins 파일 경로 \
src/main/resources/static/ko/installation/vmhost/000.installation_vmhost.html  
src/main/resources/static/ko/manual/manual_exclusive.html  
src/main/resources/static/ko/release-note/release_note.html

#### HTML 파일 내 이미지 경로 수정
../resources/static -> /resources/{version}/static

#### HTML 에서 참조할 이미지 추가
경로 : /resources/{version}/static
복사 : lena-docs 프로젝트 경로의  /src/main/resources/static 하위 image 파일들을 /resources/{version}/static 경로에 추가 

### 다운로드용 PDF 파일 추가
경로 : /resources/{version}/pdf
방법 : 신규 버전 디렉토리 생성 후 pdf 디렉토리에 jenkins 에 생성된 pdf 파일 추가

- LENA_Brochure.pdf 파일은 이전버전 디렉토리에서 복제
- jenkins lena-doc job 의 artifact 로 생성된 pdf 를 복제
대상목록
> - LENA_Installation_Container_v1.3.pdf
> - LENA_Installation_Enterprise_v1.3.pdf
> - LENA_Installation_Standard_v1.3.pdf
> - LENA_Installation_VM_v1.3.pdf
> - LENA_Manual_Container_v1.3.pdf
> - LENA_Manual_Enterprise_v1.3.pdf
> - LENA_Manual_Standard_v1.3.pdf
> - LENA_Manual_VM_v1.3.pdf
