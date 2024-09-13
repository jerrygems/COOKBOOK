import React, { useRef, useState } from 'react'
import Quill from 'quill'
import QuillEditor from 'react-quill'

function QuillEditorBox() {
    const [value, setValue] = useState('')
    return (
        <QuillEditor
            theme="bubble"
            value={value}
            options={
                toolbar:{
                    
                }
            }
            onChange={value=>setValue(value)}
        />
    )
}

export default QuillEditorBox