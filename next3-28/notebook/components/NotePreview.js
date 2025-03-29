//预览组件
//xss 攻击
//xss 攻击
//xss 攻击
//xss 攻击
//markdown -> html
import {marked} from 'marked';
//html -> 安全的html
import sanitizeHtml from 'sanitize-html';

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
    'img',
    'h1',
    'h2',
    'h3',
]);
//script XSS
// console.log(allowedTags,allowedTags.indexOf('script'));

const allowedAttributes = Object.assign(
    {},
    sanitizeHtml.defaults.allowedAttributes,
    {
        img: ['alt','src',],
    }
)
export default function NotePreview({Children}){
    return(
        <div className='note-preview'>
            <div
              className='text-with-markdown'
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(marked(Children  || ''),{
                    allowedTags,
                    allowedAttributes,
                })
              }}

            >

            </div>
        </div>
    )
}
