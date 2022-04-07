import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const input_text = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(input_text);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する慣習
const createIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  const span = document.createElement("span");
  span.innerText = text;

  // buttonの生成
  const complete_button = document.createElement("button");
  complete_button.innerText = "完了";
  complete_button.addEventListener("click", () => {
    // 押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(complete_button.parentNode.parentNode);

    const add_target = complete_button.parentNode.parentNode;
    const text = add_target.firstElementChild.firstElementChild.innerText;

    add_target.textContent = null;

    // divタグ生成
    const div = document.createElement("div");
    div.className = "list-row";

    // spanタグ生成
    const span = document.createElement("span");
    span.innerText = text;

    // buttonの生成
    const return_button = document.createElement("button");
    return_button.innerText = "戻す";
    return_button.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（li）を完了リストから削除
      const delete_target = return_button.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(delete_target);

      // テキスト取得
      const text = delete_target.firstElementChild.firstElementChild.innerText;

      createIncompleteList(text);
    });

    div.appendChild(span);
    div.appendChild(return_button);

    // divタグの子要素に各要素を設定
    add_target.appendChild(div);

    // 完了のリストに追加
    document.getElementById("complete-list").appendChild(add_target);
  });

  // buttonの生成
  const delete_button = document.createElement("button");
  delete_button.innerText = "削除";
  delete_button.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(delete_button.parentNode.parentNode);
  });

  div.appendChild(span);
  div.appendChild(complete_button);
  div.appendChild(delete_button);

  // divタグの子要素に各要素を設定
  li.appendChild(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
