//  package Booking;
import java.io.ObjectInputFilter.Status;
import java.util.Scanner;
//  page 1- movie1
class movie1 {
    private String name;
    private String theaterName;
    private int noOfTickets;
    private int cost;
    movie1(){
        Scanner sc =new Scanner(System.in);

        System.out.println("Enter the movie's name:");
        this.name = sc.nextLine();

        System.out.println("Enter the theater's name:");
        this.theaterName = sc.nextLine();
        
        System.out.println("Enter the no of tickets:");
        this.noOfTickets = sc.nextInt();
        
        System.out.println("Enter the cost per ticket:");
        this.cost = sc.nextInt();
    }
    void setName(String name){
        this.name = name;
    }
    String getName(){
        return name;
    }
    void setTheaterName(String theaterName){
        this.theaterName = theaterName;
    }
    String getTheaterName(){
        return theaterName;
    }
    void setNoOfTickets(int noOfTickets){
        this.noOfTickets= noOfTickets;
    }
    int getNoOfTickets(){
        return noOfTickets;
    }
    void setCost(int cost){
        this.cost= cost;
    }
    int getCost(){
        return cost;
    }

    void storeAllDetails(String name, String brand, int memory, int camera, double price){
        this.name= name;
        this.theaterName= theaterName;
        this.noOfTickets= noOfTickets;
        this.cost= cost;
    }

    void viewAllDetails(){
        System.out.println("Name :"+name);
        System.out.println("Theater Name :"+theaterName);
        System.out.println("NO. Of Tickets :"+noOfTickets);
        System.out.println("Coast Of The Ticket :"+cost);
    }

}

//  page 2- movie2

public class movie2 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int status=1;
        
         movie1 movielist[]= null;
    
    do{
        System.out.println("WELCOME TO THE CINEMA HALL");
        System.out.println("1. Add movie details");
        System.out.println("2. Search and Book");
        System.out.println("3. view all");
        System.out.println("Enter your choice: ");
       
        int ch = sc.nextInt();
        switch(ch){

            case 1: 
                     System.out.println("Enter no of movies : ");
                     int no=sc.nextInt();
                      movielist= new movie1[no];
                     for(int i=0;i<movielist.length;i++){
                        int j=i;
                        System.out.println("Enter movie "+ ++j +"details");
                         movielist[i]= new movie1();
                     }
                     System.out.println("Data saved.....");
                     break;

            case 2:
                    boolean flag= true;
                    sc.nextLine();
                    System.out.println("Enter the movie name : ");
                    String name = sc.nextLine();
                    for(int i=0;i<movielist.length;i++){
                        if(movielist[i].getName().equals(name)){
                            movielist[i].viewAllDetails();
                            flag = true;
                            System.out.println("Would you like to book tickets for this movie? :");
                            System.out.println("Enter 1 to book and 2 to exite :");
                            int c=sc.nextInt();
                            if(c==1){
                                System.out.println("Enter the no. of tickets :");
                                int tick = sc.nextInt();
                                int tc = movielist[i].getCost()*tick;
                                System.out.println("The bill comes up to :"+tc);
                            }
                            else
                                 break;

                        }
                        else
                             flag = false;
                    }   
                    if(flag==false)
                    System.out.println("Not Found");
                    break;
                    
            case 3: 
                    for(int i=0;i<movielist.length;i++){
                        movielist[i].viewAllDetails();
                    } 
                    
            default : 
                      System.out.println("Wrong choice...");       
        }
        System.out.println("Do you want to continue (1.YES / 2. NO) :");
        status = sc.nextInt();

    }
    while(status==1);
    System.out.println("Execution completed succefully....");
}
}
