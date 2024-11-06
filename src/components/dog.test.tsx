import { afterEach, describe, expect, it } from 'vitest';
import { GenerateDog } from './dog';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';

async function fetchDogMock() {
    return "https://images.dog.ceo/breeds/mastiff-english/1.jpg"
}

describe('Dog component', async () => {
    afterEach(() => {
        cleanup();
    });

    it('Should render dog component', async () => {
        render(<GenerateDog service={fetchDogMock}/>);

        const title = await screen.getByText("Click this button and see a funny dog!")
        expect(title).not.toBeNull();
    });

    it('Should render dog image', async () => {
        render(<GenerateDog service={fetchDogMock}/>);
        
        expect(screen.queryByTestId("dog-image")).toBeNull()

        const button = await screen.getByTestId("click-me-button")
        await fireEvent.click(button)

        await waitFor(() => expect(screen.queryByTestId("dog-image")).not.toBeNull())
    });
});