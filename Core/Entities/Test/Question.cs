namespace Core.Entities.Test
{
    public class Question : BaseEntity
    {
        public string Text { get; set; }
        public int SubjectId { get; set; }
        public Subject Subject { get; set; }
        public List<Answer> Answers { get; set; }
    }
}