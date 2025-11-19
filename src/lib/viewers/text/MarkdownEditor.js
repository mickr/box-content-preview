import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { schema, defaultMarkdownParser, defaultMarkdownSerializer } from 'prosemirror-markdown';
import { history, undo, redo } from 'prosemirror-history';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap, toggleMark } from 'prosemirror-commands';

export default class MarkdownEditor {
    constructor(targetEl, content) {
        this.view = new EditorView(targetEl, {
            state: EditorState.create({
                doc: defaultMarkdownParser.parse(content),
                plugins: [
                    history(),
                    keymap({
                        'Mod-z': undo,
                        'Mod-y': redo,
                        'Mod-b': toggleMark(schema.marks.strong),
                        'Mod-i': toggleMark(schema.marks.em),
                    }),
                    keymap(baseKeymap),
                ],
                schema,
            }),
        });
    }

    getContent() {
        return defaultMarkdownSerializer.serialize(this.view.state.doc);
    }

    destroy() {
        this.view.destroy();
    }

    focus() {
        this.view.focus();
    }
}
