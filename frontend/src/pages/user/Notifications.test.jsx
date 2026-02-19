import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

// mock hook to provide predictable data
vi.mock('../../hooks/useFetch', () => ({
  default: vi.fn(() => ({ data: [{ id: 1, title: 'T', description: 'D' }], error: null, loading: false })),
}));

import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('debería renderizar la página de avisos', () => {
    render(<Notifications />);
    expect(screen.getByText('Avisos')).toBeInTheDocument();
  });

  it('debería mostrar encabezado de notificaciones', () => {
    const { container } = render(<Notifications />);
    const header = container.querySelector('.notifications-header');
    expect(header).toBeInTheDocument();
  });

  it('debería mostrar grid de notificaciones', () => {
    const { container } = render(<Notifications />);
    const grid = container.querySelector('.notifications-grid');
    expect(grid).toBeInTheDocument();
  });

  it('debería renderizar tarjetas de notificación', () => {
    const { container } = render(<Notifications />);
    const cards = container.querySelectorAll('.notification-card');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('h2 debería tener atributo tabIndex', () => {
    const { container } = render(<Notifications />);
    const heading = container.querySelector('h2');
    expect(heading?.getAttribute('tabIndex')).toBe('-1');
  });

  it('cada tarjeta debería tener contenido', () => {
    const { container } = render(<Notifications />);
    const cardContent = container.querySelectorAll('.notification-content');
    expect(cardContent.length).toBeGreaterThan(0);
  });
});
