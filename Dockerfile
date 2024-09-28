# Use the appropriate OpenJDK version
FROM openjdk:17 AS build

WORKDIR /app

# Copy the Maven configuration file and dependencies
COPY pom.xml .
COPY src ./src

# Build the app using Maven
RUN mvn clean package -DskipTests

# Build runtime image
FROM openjdk:17-jdk-slim AS runtime
WORKDIR /app
COPY --from=build /app/target/your-app.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
