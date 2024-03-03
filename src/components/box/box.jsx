import './box.css'


const Box = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Box
