import { IAccordion } from '../types/IAccordion'

export const navListItems = [
	'Акций',
	'Кредит',
	'Оплата и Доставка',
	'Помощь',
	'Скупка Б/У',
	'Контакты',
]

export const AccordionItem: IAccordion[] = [
	{
		id: 1,
		title: 'Информация',
		subItem: [
			{ id: 1, title: 'Акции', to: '/react-comp/stock' },
			{ id: 2, title: 'Кредит', to: '/react-comp/сredit' },
			{ id: 3, title: 'Оплата и доставка', to: '/react-comp/delivery' },
			{ id: 4, title: 'Гарантия', to: '/react-comp/guarantee' },
			{ id: 5, title: 'Частые вопросы', to: '/react-comp/questions' },
			{ id: 6, title: 'Новости', to: '/react-comp/news' },
			{ id: 7, title: 'Блог', to: '/react-comp/blog' },
			{ id: 8, title: 'О нас', to: '/react-comp/about' },
			{
				id: 9,
				title: 'Политика конфиденциальности',
				to: '/react-comp/privacy',
			},
			{
				id: 10,
				title: 'Контакты',
				to: '/react-comp/contacts',
			},
		],
	},
	{
		id: 2,
		title: 'Наши сервисы',
		subItem: [],
	},
]

export const contactsData = [
	'(067) 11-12-485 - Отдел продаж',
	'(066) 484-39-22 - Отдел продаж',
	'(063) 747-33-48 - Отдел продаж',
	'Днепр\n Европейская, 8 (бывшая Миронова 8)',
	'Понедельник-Пятница 9:00-19:00',
	'Суббота-Воскресенье: с 9:00-16:00',
]
