import React from "react";
import "./asset/css/todo.css";
import { fetchList } from "./api/api";
import ListItem from "./components/ListItem";
import InputArea from "./components/InputArea";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isAllClick: false
    };
  }
  formatList = list => {
    return list.map((item, id) => {
      const type = "new";
      const tmp = { item, type, id, isShow: true };
      return tmp;
    });
  };

  createItemList = list => {
    return list.map((item, i) => {
      return <ListItem key={i} {...item} itemClick={this.itemClick} />;
    });
  };

  itemClick = id => {
    const tar = this.state.list[id];
    const tarType = tar.type;

    tar.type = tarType === "new" ? "done" : "new";
    this.setState({ list: this.state.list });
  };

  addItem = v => {
    if (v === "") return;
    const { list } = this.state;
    const id = list.length;
    const type = "new";
    const item = v;
    const isShow = true;
    list.push({ id, type, item, isShow });
    console.log(list);
    this.setState({ list });
  };

  queryList = v => {
    const { list } = this.state;
    const newList = list.map(o => {
      const item = o.item;
      o.isShow = item.indexOf(v) > -1 || v === "";
      return o;
    });

    this.setState({ list: newList });
  };

  allClick = () => {
    const { isAllClick, list } = this.state;
    const newList = list.map(item => {
      const allType = isAllClick ? "new" : "done";
      item.type = allType;
      return item;
    });

    this.setState({
      isAllClick: !isAllClick,
      list: newList
    });
  };
  render() {
    return (
      <div className="App">
        <InputArea
          addItem={this.addItem}
          queryList={this.queryList}
          allClick={this.allClick}
        />
        <ul>{this.createItemList(this.state.list)}</ul>
      </div>
    );
  }

  async componentDidMount() {
    const o = await fetchList();
    if (o == null) return;
    const list = this.formatList(o.data);

    this.setState({ list });
  }
}
