package one.digitalinnovation.gof.exception;

public class ClienteNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 20230809L;

	public ClienteNotFoundException(String message) {
        super(message);
    }

    public ClienteNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
