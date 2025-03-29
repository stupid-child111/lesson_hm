import Link from "next/link";

export default function EditButton({ noteId, children }) {
  const isDraft = noteId === null;
  return (
    <Link href={`/note/edit/${noteId || ''}`}
    className="link-unstyled"
    >
        <button className={[
            'edit-button',
            isDraft ? 'edit-button--soild' : 'edit-button--outline'
        ].join(' ')}>
            {children}
        </button>
    </Link>
  )
}