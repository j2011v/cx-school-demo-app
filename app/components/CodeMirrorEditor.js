import { Widget, VDOM } from 'cx/ui';

import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ambiance.css';

export class CodeMirrorEditor extends Widget {
   declareData(...args) {
      super.declareData(...args, {
         value: undefined,
      });
   }

   render(context, instance, key) {
      let { data } = instance;
      return <CodeMirrorEditorComponent key={key} instance={instance} data={data} />;
   }
}

CodeMirrorEditor.prototype.styled = true;
CodeMirrorEditor.prototype.baseClass = 'codemirroreditor';

class CodeMirrorEditorComponent extends VDOM.Component {
   render() {
      let { data, instance } = this.props;
      return (
         <div className={data.classNames} style={data.style}>
            <textarea
               value={data.value}
               ref={(el) => {
                  this.el = el;
               }}
            />
         </div>
      );
   }

   componentDidMount() {
      this.editor = CodeMirror.fromTextArea(this.el, {
         lineNumbers: true,
      });

      this.editor.on('blur', () => this.save());
   }

   save() {
      var value = this.editor.getValue();
      this.props.instance.set('value', value);
   }
}
