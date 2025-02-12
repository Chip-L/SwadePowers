import log4jsPlugin from "./log4jsPlugin";

const mockShutdown = vi.hoisted(() => vi.fn());

vi.mock("./logging", () => ({
  shutdown: mockShutdown,
}));

describe("log4jsPlugin", () => {
  it("shuts down log4js when the server is closed", async () => {
    const server = await log4jsPlugin.serverWillStart();
    server.serverWillStop();
    expect(mockShutdown).toHaveBeenCalled();
  });
});
