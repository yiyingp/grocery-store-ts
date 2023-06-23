
interface SearchBarProps {
    filterText: string;
    onFilterTextChange: (filterText: string) => void;
}

export default function SearchBar({ filterText, onFilterTextChange }: SearchBarProps) {
    return (
        <form>
            <input 
                id="search"
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
        </form>
    );
}