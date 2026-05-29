package de.hszg.stundenplaner;

public class TimeSlotDTO {
    private int slotIdx;
    private String startTime;
    private String endTime;
    private String label;

    public TimeSlotDTO(int slotIdx, String startTime, String endTime, String label) {
        this.slotIdx = slotIdx;
        this.startTime = startTime;
        this.endTime = endTime;
        this.label = label;
    }

    public int getSlotIdx() { return slotIdx; }
    public String getStartTime() { return startTime; }
    public String getEndTime() { return endTime; }
    public String getLabel() { return label; }
}
