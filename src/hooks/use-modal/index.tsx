/*
    Система для использования модальных окон
    Работает по идеалогии promise-like

    Интерфейс: const result = await openModal(<SomeModal />);


    interface ISomeModalProps {
        data: any;
        close: () => Promise<ResultType>
    }
*/
