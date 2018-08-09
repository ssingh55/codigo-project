import React, { Component } from 'react';
import Beautify from 'js-beautify';
import { render } from 'react-dom';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
require('codemirror/theme/dracula.css');
require('codemirror/lib/codemirror.js');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/css/css.js');
require('codemirror/addon/edit/closetag.js');
require('codemirror/addon/edit/matchbrackets.js');
require('codemirror/addon/fold/foldgutter.js');
require('codemirror/mode/htmlmixed/htmlmixed.js');

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


class App extends Component {
  static App = { dataHTML: "", dataCSS: "", dataJS: "" };
  constructor() {
    super();
    this.state = {
      name: 'Redhat',
    };
    this.updateCode = this.updateCode.bind(this);
    this.handleClickJS = this.handleClickJS.bind(this);
    this.handleClickCSS = this.handleClickCSS.bind(this);
    this.handleClickHTML = this.handleClickHTML.bind(this);
  }

  handleClickJS(e) {
    console.log(e.target.parentNode.children[1]);
    this.setState({ x: e.target.parentNode.children[1].value })

    let prettfiedJS = beautify_js(e.target.parentNode.children[1].value, opts);
    App.dataJS = prettfiedJS;
    // e.target.parentNode.children[3].value
  }

  handleClickCSS(e) {
    console.log(e.target.parentNode.children[0])
    this.setState({ x: e.target.parentNode.children[0].value })
    let prettfiedCSS = beautify_css(e.target.parentNode.children[0].value, opts);
    App.dataCSS = prettfiedCSS;
    // e.target.parentNode.children[3].value
  }

  handleClickHTML(e) {
    console.log(e.target.parentNode.children[0].value)
    this.setState({ x: e.target.parentNode.children[0].value })
    let prettfiedHTML = beautify_html(e.target.parentNode.children[0].value, opts);
    App.dataHTML = prettfiedHTML;
    // e.target.parentNode.children[3].value
  }

  updateCode(newCode) {
    this.setState({
      code: newCode
    });
  }

  render() {
    let options = {
      lineNumbers: true,
    };
    return (
      <div>
        <div>
          <p>Start editin code from here</p>
          {/* <CodeMirror value={this.state.code} onChange={this.updateCode}
                    options={options} /> */}
          <input type="text" value={`var numbers = [1, 3, 6, 8, 11];var lucky = numbers.filter(function(number) {return number > 7;});
 $('#download').on("click", function() {var fileContents = data; var fileName = "data.js";
var pp = document.createElement('a'); pp.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContents)); pp.setAttribute('download', fileName); pp.click();});
});`} />
          <button onClick={this.handleClickJS}>BeautifyJS</button>

          <CodeMirror
            value={App.dataJS}
            options={{
              mode: 'javascript',
              theme: 'dracula',
              lineNumbers: true,
            }}
            onChange={(editor, data, value) => {
            }}
          />
        </div>
        <div>
          <input type="text" value={`.dummy:after,body{text-align:center}body{font-family:Helvetica,Arial,sans-serif}img{margin:10px}.dummy{box-sizing:border-box;display:inline-block;position:relative}.dummy:before{content:'';position:absolute;background:#d3d3d3;top:0;right:0;bottom:0;left:0}.dummy:after{content:attr(width) " x " attr(height);white-space:pre;color:gray;display:block;position:absolute;width:100%;top:calc(50% - .5em);font-size:100%}.dummy.alt:after{content:attr(alt)}.dummy.double.alt:after{content:attr(alt) "\A" attr(data-second);white-space:pre;top:calc(50% - 1em)}.dummy.big{font-size:200%}.dummy.small{font-size:50%}.dummy.round{padding:0 1em}.dummy.round:before{border-radius:1em}.dummy.round:after{margin-left:-1em}`} />
          <button onClick={this.handleClickCSS}>BeautifyCSS</button>
          <CodeMirror
            value={App.dataCSS}
            options={{
              mode: 'CSS',
              theme: 'dracula',
              lineNumbers: true,
            }}
            onChange={(editor, data, value) => {
            }}
          />
        </div>

        <div>
          <input type="text" value={`<h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa <strong>strong</strong>. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede <a class="external ext" href="#">link</a> mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p><h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1><h2>Aenean commodo ligula eget dolor aenean massa</h2><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p><h2>Aenean commodo ligula eget dolor aenean massa</h2><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p><ul><li>Lorem ipsum dolor sit amet consectetuer.</li><li>Aenean commodo ligula eget dolor.</li><li>Aenean massa cum sociis natoque penatibus.</li></ul><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p><table class="data"><tr><th>Entry Header 1</th><th>Entry Header 2</th><th>Entry Header 3</th><th>Entry Header 4</th></tr><tr><td>Entry First Line 1</td><td>Entry First Line 2</td><td>Entry First Line 3</td><td>Entry First Line 4</td></tr><tr><td>Entry Line 1</td><td>Entry Line 2</td><td>Entry Line 3</td><td>Entry Line 4</td></tr><tr><td>Entry Last Line 1</td><td>Entry Last Line 2</td><td>Entry Last Line 3</td><td>Entry Last Line 4</td></tr></table><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>`} />
          <button onClick={this.handleClickHTML}>BeautifyHTML</button>
          <CodeMirror
            value={App.dataHTML}
            options={{
              mode: 'text/html',
              theme: 'dracula',
              lineNumbers: true,
            }}
            onChange={(editor, data, value) => {
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;