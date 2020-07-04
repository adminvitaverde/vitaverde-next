import { mdToDraftjs } from 'draftjs-md-converter';
import createLinkDecorator from "./Link";

import { Editor, EditorState, convertFromRaw, DefaultDraftBlockRenderMap } from 'draft-js';
import { Map } from 'immutable';


const MediaComponent = ({ block, contentState }) => {
    const { url, fileName } = contentState.getEntity(block.getEntityAt(0)).getData();    
    return <img src={`${url}`}  alt={fileName} style={{ width: "100%", marginBottom: '60px'  }} />
}

export default function ReadOnlyEditor({ content }) {

    const markdownString = content ? content : '';
    console.log("CONTENT", markdownString);
    
    const rawData = mdToDraftjs(markdownString);
    const contentState = convertFromRaw(rawData);
    const decorator = createLinkDecorator();
    const newEditorState = EditorState.createWithContent(contentState, decorator);    

    // Block styling https://draftjs.org/docs/advanced-topics-block-styling
    function myBlockStyleFn(contentBlock) {
        const type = contentBlock.getType();

        if (type === 'header-one') {            
            return ('editor-heading');
        }
        if (type === 'header-two') {            
            return ('editor-heading-two');
        }
        if (type === 'unstyled') {
            return ('vv-text-hello text-read');
        }
    }

    // Custom Block Rendering https://draftjs.org/docs/advanced-topics-custom-block-render-map
    const blockRenderMap = Map({
        'header-one': {
            element: 'h1'
        },
        'header-two': {
            element: 'h2'
        },
        'header-six': {
            element: 'h6'
        },
        'unstyled': {
            element: 'p'
        }
    });

    const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);


    // Custom Block Component https://draftjs.org/docs/advanced-topics-block-components
    function myBlockRenderer(contentBlock) {
        const type = contentBlock.getType();
        if (type === 'atomic') {
            return {
                component: MediaComponent,
                editable: false
            };
        }
    }


    return (
        <>
            <Editor
                editorState={newEditorState}
                blockRendererFn={myBlockRenderer}
                readOnly={true}
                blockRenderMap={extendedBlockRenderMap}
                blockStyleFn={myBlockStyleFn}
            />

            <style jsx global>{`
                .text-read {
                    margin: 0;
                }

            `}</style>
        </>
    )

}