
export default function Genre({genre, onSelect, isSelected}) {

    return (
        <li>
            <button id="genre-buttons" className={isSelected ? 'active' : undefined} onClick={onSelect}>{genre}</button>
        </li>
    );
}
