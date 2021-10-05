# lenalaborg.github.io


## asciidoc html 파일 변환 작업 가이드
### 스크립트 추가
```javascript
<script>
    function resizeToc() {
        var width_size = window.outerWidth;

        var toc = document.getElementById("toc");
        var leftWidth = 0;

        if (width_size > 1280) {
            leftWidth = (width_size - 1280) / 2;
        }
        toc.style.left = leftWidth + "px";
        console.log("toc.style.left : " + toc.style.lefts);
    }

    window.onload = function () {
        resizeToc();
    };

    window.addEventListener( "resize", function (event) {
        resizeToc();
    },true);
</script>
```

### 이미지 경로 수정
../resources/static -> /resources/{version}/static