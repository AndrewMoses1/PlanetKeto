# Use the Maven image which includes OpenJDK 17
FROM maven:3.8.6-openjdk-17 AS build

WORKDIR /app

# Copy the Maven configuration file and source code
COPY pom.xml .
COPY src ./src

# Build the app using Maven
RUN mvn clean package -DskipTests

# Build runtime image
FROM openjdk:17-jdk-slim AS runtime
WORKDIR /app
COPY --from=build /app/target/your-app.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
