package dio.expertostech.tutorialmicroservicekafka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.EnableKafka;

@EnableKafka
@SpringBootApplication
public class TutorialMicroserviceKafkaApplication {

	public static void main(String[] args) {

		SpringApplication.run(TutorialMicroserviceKafkaApplication.class, args);
	}

}
