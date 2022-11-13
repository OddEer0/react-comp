import React from 'react'

interface ListProps<T> extends React.HTMLAttributes<HTMLUListElement> {
	items: T[]
	renderItem: (item: T, index?: number) => React.ReactNode
}

export default function List<T>({ renderItem, items, ...props }: ListProps<T>) {
	return <ul {...props}>{items.map(renderItem)}</ul>
}
