export interface SellerApiError {
    success: false;
    message: string;
    code?: string;
}

export function isSellerApiError(
    value: unknown,
): value is SellerApiError {
    if (
        typeof value !== "object" ||
        value === null
    ) {
        return false;
    }

    const error = value as Record<string, unknown>;

    return (
        error.success === false &&
        typeof error.message === "string"
    );
}

export class SellerError extends Error {
    public readonly status: number;
    public readonly code?: string;
    public readonly details?: unknown;

    constructor(
        message: string,
        options: {
            status?: number;
            code?: string;
            details?: unknown;
        } = {},
    ) {
        super(message);

        this.name = "SellerError";
        this.status = options.status ?? 0;
        this.code = options.code;
        this.details = options.details;

        Object.setPrototypeOf(this, new.target.prototype);
    }
}