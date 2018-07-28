import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  OnInit
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DiffEditorModel } from 'ngx-monaco-editor';

@Component({
  selector: 'diff',
  styleUrls: ["./diff.component.css"],
  templateUrl: "./diff.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class DiffComponent implements OnInit {

  text1 = "";
  text2 = "";
  isCompared = false;
  
  @Output()
  selectedLang = "text/plain";
  @Output()
  selectedTheme = "vs";

  @Input()
  languages = [
    "text/plain",
    "bat",
    "c",
    "coffeescript",
    "cpp",
    "csharp",
    "csp",
    "css",
    "dockerfile",
    "fsharp",
    "go",
    "handlebars",
    "html",
    "ini",
    "java",
    "javascript",
    "json",
    "less",
    "lua",
    "markdown",
    "msdax",
    "mysql",
    "objective-c",
    "pgsql",
    "php",
    "plaintext",
    "postiats",
    "powershell",
    "pug",
    "python",
    "r",
    "razor",
    "redis",
    "redshift",
    "ruby",
    "rust",
    "sb",
    "scss",
    "sol",
    "sql",
    "st",
    "swift",
    "typescript",
    "vb",
    "xml",
    "yaml"
  ];

  @Input()
  themes = [
    {
      value: "vs",
      name: "Visual Studio"
    },
    {
      value: "vs-dark",
      name: "Visual Studio Dark"
    },
    {
      value: "hc-black",
      name: "High Contrast Dark"
    }
  ];

  // input
  inputOptions = { theme: "vs", language: 'text/plain' };
  // compare, output
  diffOptions = { theme: "vs", language: "text/plain", readOnly: true, renderSideBySide: true };
  originalModel: DiffEditorModel = {
    code: '',
    language: 'text/plain' 
  };

  modifiedModel: DiffEditorModel = {
    code: '',
    language: 'text/plain' 
  };

  public ngOnInit() {
    
  }

  onChangeLanguage(language) {
    this.inputOptions = Object.assign({}, this.inputOptions, { language: language });
    //this.diffOptions = Object.assign({}, this.diffOptions, { language: language });
    this.originalModel = Object.assign({}, this.originalModel, { language: language });
    this.modifiedModel = Object.assign({}, this.modifiedModel, { language: language });
  }
  onChangeTheme(theme) {
    this.inputOptions = Object.assign({}, this.inputOptions, { theme: theme });
    this.diffOptions = Object.assign({}, this.diffOptions, { theme: theme });
  }

  onChangeInline(checked) {
    this.diffOptions = Object.assign({}, this.diffOptions, { renderSideBySide: !checked });
  }

  onCompare() {
    this.originalModel = Object.assign({}, this.originalModel, { code: this.text1 });
    this.modifiedModel = Object.assign({}, this.originalModel, { code: this.text2 });
    this.isCompared = true;
    window.scrollTo(0, 0); // scroll the window to top
  }
}
