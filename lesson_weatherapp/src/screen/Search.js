import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sysdate } from "../components/Sysdate";
import { Button } from "../components/Button";

const styles = {
  title: {
    width: 500,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
    marginTop: 200,
    marginBottom: 30,
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: 40,
  },
  explanation: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 30,
  },
  searchArea: {
    display: "flex",
    justifyContent: "center",
  },
  dropdownMenu: {
    width: 400,
    height: 60,
    fontSize: 20,
    marginRight: 30,
  },
};

const Search = () => {
  const navigate = useNavigate();

  const move = () => {
    navigate("/Result", { state: { prefecturalName: prefecturalName } });
  };

  const [prefecturalName, setPrefecturalName] = useState("");

  const handleChange = (event) => {
    setPrefecturalName(event.target.value);
  };

  return (
    <>
      <div style={styles.title}>天気アプリ</div>
      <div style={styles.explanation}>
        地名を検索すると
        <Sysdate />
        の天気が表示されます。
      </div>
      <div style={styles.searchArea}>
        <div>
          <select
            value={prefecturalName}
            onChange={handleChange}
            style={styles.dropdownMenu}
          >
            <option defaultValue="0">都道府県</option>
            <option value="Sapporo">北海道</option>
            <option value="Aomori">青森県</option>
            <option value="Morioka">岩手県</option>
            <option value="Sendai">宮城県</option>
            <option value="Akita">秋田県</option>
            <option value="Yamagata">山形県</option>
            <option value="Fukushima">福島県</option>
            <option value="Mito">茨城県</option>
            <option value="Utsunomiya">栃木県</option>
            <option value="Maebashi">群馬県</option>
            <option value="Saitama-ken">埼玉県</option>
            <option value="Chiba">千葉県</option>
            <option value="Tokyo">東京都</option>
            <option value="Yokohama">神奈川県</option>
            <option value="Niigata">新潟県</option>
            <option value="Toyama">富山県</option>
            <option value="Kanazawa">石川県</option>
            <option value="Fukui-shi">福井県</option>
            <option value="Yamanashi">山梨県</option>
            <option value="Nagano">長野県</option>
            <option value="Gifu-shi">岐阜県</option>
            <option value="Shizuoka">静岡県</option>
            <option value="Nagoya">愛知県</option>
            <option value="Tsu">三重県</option>
            <option value="Shiga">滋賀県</option>
            <option value="Kyoto">京都府</option>
            <option value="Osaka">大阪府</option>
            <option value="Kobe">兵庫県</option>
            <option value="Nara-shi">奈良県</option>
            <option value="Wakayama">和歌山県</option>
            <option value="Tottori">鳥取県</option>
            <option value="Matsue">島根県</option>
            <option value="Okayama">岡山県</option>
            <option value="Hiroshima">広島県</option>
            <option value="Yamaguchi">山口県</option>
            <option value="Tokushima">徳島県</option>
            <option value="Takamatsu">香川県</option>
            <option value="Matsuyama">愛媛県</option>
            <option value="Kochi">高知県</option>
            <option value="Fukuoka">福岡県</option>
            <option value="Saga">佐賀県</option>
            <option value="Nagasaki">長崎県</option>
            <option value="Kumamoto">熊本県</option>
            <option value="Ōita">大分県</option>
            <option value="Miyazaki">宮崎県</option>
            <option value="Kagoshima">鹿児島県</option>
            <option value="Naha">沖縄県</option>
          </select>
        </div>
        <div>
          <Button title="検索" OnClick={() => move()} />
        </div>
      </div>
    </>
  );
};

export default Search;
