import java.util.HashMap;
import java.util.Set;
public class Hash{
    public static void main (String[] args){

        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("OTTO","meme si en arrete la sa narrete pas");
        trackList.put("prblem","6Lack Problem......");
        trackList.put("mirror ","Lil Wayne Mirror in the Words");
        trackList.put("lyoum bel 9owa  ","club africain ");
        String track = trackList.get("OTTO") ;
        System.out.println(track);
        Set<String> keys = trackList.keySet();
        for(String key : keys) {
            System.out.println(key+" : "+trackList.get(key)); 
        }
    }
}