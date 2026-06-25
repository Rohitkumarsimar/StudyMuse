export function TaskFilters({activeFilter, onFilterChange}){
    return(
        <div className="flex gap-4 border-b border-gray-200">
            <button onClick={()=>onFilterChange('all')} className={activeFilter='all'?'border-b-2 border-indigo-600 text-indigo-600 pb-2' : 'text-gray-500 pb-2'}>
                All
            </button>

            <button onClick={()=>onFilterChange('completed')} className={activeFilter='completed'?'border-b-2 border-indigo-600 text-indigo-600 pb-2' : 'text-gray-500 pb-2'}>
                Completed
            </button>

            <button onClick={()=>onFilterChange('pending')} className={activeFilter='pending'?'border-b-2 border-indigo-600 text-indigo-600 pb-2' : 'text-gray-500 pb-2'}>
                Pending
            </button>
        </div>
    )
}