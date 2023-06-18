import { getUrlParameters } from '../getUrlParameters';

describe('getUrlParameters', () => {
  it('should return the URL parameters', () => {
    const mockURL = 'https://example.com/?eventId=123&theatre=Theatre1&seatingPlan=PlanA';
    const spy = jest
      .spyOn(window, 'location', 'get')
      .mockReturnValueOnce({ href: mockURL } as Location);

    const result = getUrlParameters();

    expect(result).toEqual({
      eventId: '123',
      theatre: 'Theatre1',
      seatingPlan: 'PlanA',
    });

    spy.mockRestore();
  });

  it('should return empty strings for missing URL parameters', () => {
    const mockURL = 'https://example.com/';
    const spy = jest
      .spyOn(window, 'location', 'get')
      .mockReturnValueOnce({ href: mockURL } as Location);

    const result = getUrlParameters();

    expect(result).toEqual({
      eventId: '',
      theatre: '',
      seatingPlan: '',
    });

    spy.mockRestore();
  });
});
