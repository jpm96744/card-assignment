export default function Rating({rating, onSelect, isSelected}) {
    return (
        <li>
            <button id="rating-buttons" className={isSelected ? 'active' : undefined} onClick={onSelect}>{rating}</button>
        </li>
    );
}