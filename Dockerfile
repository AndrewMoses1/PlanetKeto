# Use OpenJDK as the base image for building
FROM openjdk:17-jdk-slim AS build

# Install Maven
RUN apt-get update && apt-get install -y maven && apt-get clean

WORKDIR /app

# Copy the Maven configuration file and source code
COPY pom.xml .
COPY src ./src

# Build the app using Maven
RUN mvn clean package -DskipTests

# Build runtime image
FROM openjdk:17-jdk-slim AS runtime
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
