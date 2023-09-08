package one.digitalinnovation.gof.exception;

public class IdentifierNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 20230810L;

	public IdentifierNotFoundException(String message) {
        super(message);
    }

    public IdentifierNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
