import React, { Component } from 'react';
import Beautify from 'js-beautify';
import './App.css';
import 'codemirror/lib/codemirror.css';

const beautify_js = Beautify.js_beautify,
  beautify_html = Beautify.html_beautify,
  beautify_css = Beautify.css_beautify;
const opts = {};
opts.space_in_empty_paren = true;
opts.indent_size = "4";
opts.indent_char = " ";
opts.max_preserve_newlines = "5";
opts.preserve_newlines = true;
opts.brace_preserve_inline = true;
opts.keep_array_indentation = true;
opts.break_chained_methods = true;
opts.indent_scripts = "normal";
opts.brace_style = "collapse";//;preserve-inline
opts.space_before_conditional = true;
opts.unescape_strings = true;
opts.jslint_happy = true;
opts.end_with_newline = true;
opts.wrap_line_length = "0";
opts.indent_inner_html = true;
opts.comma_first = true;
opts.e4x = true;
// console.log(opts);


class App extends Component {
  static App = { dataHTML: "", dataCSS: "", dataJS: "" };
  constructor() {
    super();
    this.state = { x: '' };
    this.handleClickJS = this.handleClickJS.bind(this);
    this.handleClickCSS = this.handleClickCSS.bind(this);
    this.handleClickHTML = this.handleClickHTML.bind(this);
  }
  handleClickJS(e) {
    this.setState({ x: e.target.parentNode.children[0].value })

    let prettfiedJS = beautify_js(e.target.parentNode.children[0].value, opts);
    App.dataJS = prettfiedJS;
    // e.target.parentNode.children[3].value
  }

  handleClickCSS(e) {
    console.log(e.target.parentNode.children[0].value)
    this.setState({ x: e.target.parentNode.children[0].value })
    let prettfiedCSS = beautify_css(e.target.parentNode.children[0].value, opts);
    App.dataCSS = prettfiedCSS;
    // e.target.parentNode.children[3].value
  }

  handleClickHTML(e) {
    console.log(e.target.parentNode.children[0].value)
    this.setState({ x: e.target.parentNode.children[0].value })
    let prettfiedHTML = beautify_html(e.target.parentNode.children[0].value, opts);
    // App.dataHTML = prettfiedHTML;
    e.target.parentNode.children[3].value
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="text" />
          <button onClick={this.handleClickJS}>BeautifyJS</button>
          <textarea value={App.dataJS}></textarea>
        </div>
        <div>
          <input type="text" value={`.dummy:after,body{text-align:center}body{font-family:Helvetica,Arial,sans-serif}img{margin:10px}.dummy{box-sizing:border-box;display:inline-block;position:relative}.dummy:before{content:'';position:absolute;background:#d3d3d3;top:0;right:0;bottom:0;left:0}.dummy:after{content:attr(width) " x " attr(height);white-space:pre;color:gray;display:block;position:absolute;width:100%;top:calc(50% - .5em);font-size:100%}.dummy.alt:after{content:attr(alt)}.dummy.double.alt:after{content:attr(alt) "\A" attr(data-second);white-space:pre;top:calc(50% - 1em)}.dummy.big{font-size:200%}.dummy.small{font-size:50%}.dummy.round{padding:0 1em}.dummy.round:before{border-radius:1em}.dummy.round:after{margin-left:-1em}`}/>
          <button onClick={this.handleClickCSS}>BeautifyCSS</button>
          {this.state.x ? <textarea value={App.dataCSS}></textarea> : ""}
        </div>
        <div>
          <input type="text" />
          <button onClick={this.handleClickHTML}>BeautifyHTML</button>
          {this.state.x ? <textarea value={App.dataHTML}></textarea> : ""}
        </div>
      </div>
    );
  }
}

export default App;
