var arrBoardList = [];
const backEndUrl = 'http://localhost:3000';

// 글을 글 목록(배열)에 저장하는 함수
function saveWriting() {
  var writer = document
    .getElementsByClassName("name")[0]
    .querySelector("input").value;
  var pw = document
    .getElementsByClassName("pw")[0]
    .querySelector("input").value;
  var writing = document
    .getElementsByClassName("contents")[0]
    .querySelector("textarea").value;

  // 작성자와 글 내용이 정상적으로 적혀 있는지 확인
  if (writer.length <= 0 || writing.length <= 0) {
    alert("등록할 글의 작성자와 내용을 입력해주세요!");
    return;
  }

  // 비밀번호는 4자로 입력했는지 확인
  if (pw.length != 4) {
    alert("비밀번호는 4자로만 입력해주세요!");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${backEndUrl}/posts`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    writer,
    pw,
    writing
  }));

  arrBoardList.push({ writer, pw, writing });

  console.log(arrBoardList);

  displayBoardList();

  // 기존 내용 초기화
  document
    .getElementsByClassName("name")[0]
    .querySelector("input").value = "";
  document.getElementsByClassName("pw")[0].querySelector("input").value =
    "";
  document
    .getElementsByClassName("contents")[0]
    .querySelector("textarea").value = "";
}

function deleteBoard(id, name, pw, realPw) {
  if(pw == realPw) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `${backEndUrl}/posts/${id}`);
    xhr.send();
    displayBoardList();
  } else alert('비밀번호가 일치하지 않습니다.');
}

function udpateBoard() {
  var writer = document
    .getElementsByClassName("name")[0]
    .querySelector("input").value;
  var pw = document
    .getElementsByClassName("pw")[0]
    .querySelector("input").value;
  var writing = document
    .getElementsByClassName("contents")[0]
    .querySelector("textarea").value;
  let id = document.getElementById("boardId").value;
  
  if(!pw) {
    alert("비밀번호를 입력해주세요!");
    return;
  }
  if(pw.length != 4) {
    alert("비밀번호는 4자로만 입력해주세요!");
    return;
  }

  for(let i of arrBoardList) {
    if(i.id == id) {
      if(pw == i.pw && writer == i.writer) {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', `${backEndUrl}/posts/${i.id}`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = () => {
          if(xhr.status === 200 && xhr.readyState === 4) {
            updateCancel();
            displayBoardList();
          } else if(xhr.readyState === 4) {
            alert('수정 과정에서 오류가 발생했습니다.');
            return;
          }
        }
        xhr.send(JSON.stringify({
          writer: i.writer,
          pw: i.pw,
          writing
        }));
      } else {
        alert('이름이나 비밀번호가 일치하지 않습니다!');
      }
      break;
    }
  }
  displayBoardList();
}

function updateCancel() {
  document
    .getElementsByClassName("name")[0]
    .querySelector("input").value = "";
  document.getElementsByClassName("pw")[0].querySelector("input").value =
    "";
  document
    .getElementsByClassName("contents")[0]
    .querySelector("textarea").value = "";
  document.getElementById("boardId").value = "";
  
  document.querySelector('.put_btn').style.display = "block";
  document.querySelector('.update_btn').style.display = "none";
  document.querySelector('.cancel_btn').style.display = "none";
}

function displayBoardList() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${backEndUrl}/posts`);
  xhr.onreadystatechange = () => {
    if(xhr.status === 200 && xhr.readyState === 4) {
      const data = JSON.parse(xhr.responseText);
      arrBoardList = data;

      var contactTag = document.getElementById("contact");
      var boxListTag = contactTag.getElementsByClassName("box_list");

      boxListTag[0].innerHTML = "";

      for (var i = 0; i < arrBoardList.length; i++) {
        const el = arrBoardList[i];

        let p = document.createElement('p');
        p.className = "ellipsis";

        let writeInfoDiv = document.createElement('div');

        let writerSpan = document.createElement('span');
        writerSpan.innerHTML = el.writer;
        let writingSpan = document.createElement('span');
        writingSpan.innerHTML = el.writing;

        writeInfoDiv.appendChild(writerSpan);
        writeInfoDiv.append(' : ');
        writeInfoDiv.appendChild(writingSpan);

        let UDBtnBox = document.createElement('div');

        let updateBtn = document.createElement('input');
        updateBtn.type = "button";
        updateBtn.className = "update";
        updateBtn.onclick = () => {
          document
          .getElementsByClassName("name")[0]
          .querySelector("input").value = el.writer;

          document
          .getElementsByClassName("contents")[0]
          .querySelector("textarea").value = el.writing;

          document.querySelector('.put_btn').style.display = "none";
          document.querySelector('.update_btn').style.display = "block";
          document.querySelector('.cancel_btn').style.display = "block";

          document.getElementById('boardId').value = el.id;
        }
        updateBtn.value = "수정";

        let deleteBtn = document.createElement('input');
        deleteBtn.type = "button";
        deleteBtn.className = "delete";
        deleteBtn.onclick = () => {
          const pw = prompt("비밀번호");
          if(pw) deleteBoard(el.id, el.writer, pw, el.pw);
        }
        deleteBtn.value = "삭제";

        UDBtnBox.appendChild(updateBtn);
        UDBtnBox.appendChild(deleteBtn);

        p.appendChild(writeInfoDiv);
        p.appendChild(UDBtnBox);

        boxListTag[0].appendChild(p);
      }
    }
  }
  xhr.send();
}

window.onload = () => {
  displayBoardList();
}