import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  OnInit
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { DiffEditorModel } from "ngx-monaco-editor";

@Component({
  selector: "textcompare",
  styleUrls: ["./textcompare.component.css"],
  templateUrl: "./textcompare.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TextCompareComponent implements OnInit {
  text1 = "";
  text2 = "";
  isCompared = false;

  @Output()
  selectedLang = "plaintext";
  @Output()
  selectedTheme = "vs";

  @Input()
  languages = [
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
  inputOptions = { theme: "vs", language: "plaintext" };
  // compare, output
  diffOptions = {
    theme: "vs",
    language: "plaintext",
    readOnly: true,
    renderSideBySide: true
  };
  originalModel: DiffEditorModel = {
    code: "",
    language: "plaintext"
  };

  modifiedModel: DiffEditorModel = {
    code: "",
    language: "plaintext"
  };

  public ngOnInit() {}

  onChangeLanguage(language) {
    this.inputOptions = Object.assign({}, this.inputOptions, {
      language: language
    });
    this.originalModel = Object.assign({}, this.originalModel, {
      language: language
    });
    this.modifiedModel = Object.assign({}, this.modifiedModel, {
      language: language
    });
  }
  onChangeTheme(theme) {
    this.inputOptions = Object.assign({}, this.inputOptions, { theme: theme });
    this.diffOptions = Object.assign({}, this.diffOptions, { theme: theme });
  }

  onChangeInline(checked) {
    this.diffOptions = Object.assign({}, this.diffOptions, {
      renderSideBySide: !checked
    });
  }

  onCompare() {
    this.originalModel = Object.assign({}, this.originalModel, {
      code: this.text1
    });
    this.modifiedModel = Object.assign({}, this.originalModel, {
      code: this.text2
    });
    this.isCompared = true;
    window.scrollTo(0, 0); // scroll the window to top
  }
  onClear() {
    this.text1 = "";
    this.text2 = "";
    this.isCompared = false;
    window.scrollTo(0, 0); // scroll the window to top
  }
}
