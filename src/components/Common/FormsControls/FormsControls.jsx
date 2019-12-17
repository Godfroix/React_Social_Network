import React from 'react';
import FormsControlsCss from './FormsControls.module.css';

const FormControl = ({ input, meta, child, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={`${FormsControlsCss.formControl} ${hasError && FormsControlsCss.error}`}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restprops } = props;
    return <FormControl {...props}><textarea {...input} {...restprops} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restprops } = props;
    return <FormControl {...props}><input {...input} {...restprops} /></FormControl>
}

// export const Textarea = ({ input, meta, ...props }) => {

//     const hasError = meta.touched && meta.error;

//     return (
//         <div className={`${FormsControlsCss.formControl} ${hasError && FormsControlsCss.error}`}>
//             <div>
//                 <textarea {...input} {...props} />
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

// export const Input = ({ input, meta, ...props }) => {

//     const hasError = meta.touched && meta.error;

//     return (
//         <div className={`${FormsControlsCss.formControl} ${hasError && FormsControlsCss.error}`}>
//             <div className={FormsControlsCss.textArea}>
//                 <input {...input} {...props} />
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }