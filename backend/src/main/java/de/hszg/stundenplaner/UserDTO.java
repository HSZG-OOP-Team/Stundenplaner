package de.hszg.stundenplaner;

public class UserDTO {
    private String clerkId;
    private String name;
    private String email;
    private String role;

    public UserDTO(String clerkId, String name, String email, String role) {
        this.clerkId = clerkId;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    // Getter
    public String getClerkId() { return clerkId; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getRole() { return role; }
}
