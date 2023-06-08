using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.Test;

namespace Infrastructure.Data
{
    public class SmartyContextSeed
    {
        public static async Task SeedAsync(SmartyContext context)
        {

            if (!context.Subjects.Any())
            {
                var subjects = new List<Subject>
                {
                new Subject { Name = "Mathematics" },
                new Subject { Name = "History" },
                };

                context.Subjects.AddRange(subjects);
                context.SaveChanges();

                var questions = new List<Question>
        {
            new Question
            {
                Text = "What is 2 + 2?",
                SubjectId = subjects.Single(s => s.Name == "Mathematics").Id,
                Answers = new List<Answer>
                {
                    new Answer { Text = "3", IsCorrect = false },
                    new Answer { Text = "4", IsCorrect = true },
                    new Answer { Text = "5", IsCorrect = false },
                    new Answer { Text = "6", IsCorrect = false },
                }
            },
            new Question
            {
                Text = "Who was the first President of the United States?",
                SubjectId = subjects.Single(s => s.Name == "History").Id,
                Answers = new List<Answer>
                {
                    new Answer { Text = "George Washington", IsCorrect = true },
                    new Answer { Text = "Thomas Jefferson", IsCorrect = false },
                    new Answer { Text = "John Adams", IsCorrect = false },
                    new Answer { Text = "Abraham Lincoln", IsCorrect = false },
                }
            },
            // Add more questions and answers as needed
        };

                context.Questions.AddRange(questions);
                context.SaveChanges();
            }


            if (!context.MarkBrands.Any())
            {
                var brandsData = File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");
                var brands = JsonSerializer.Deserialize<List<MarkBrand>>(brandsData);
                context.MarkBrands.AddRange(brands);
            }

            if (!context.MarkTypes.Any())
            {
                var typesData = File.ReadAllText("../Infrastructure/Data/SeedData/types.json");
                var types = JsonSerializer.Deserialize<List<MarkType>>(typesData);
                context.MarkTypes.AddRange(types);
            }

            if (!context.Marks.Any())
            {
                var marksData = File.ReadAllText("../Infrastructure/Data/SeedData/marks.json");
                var marks = JsonSerializer.Deserialize<List<Mark>>(marksData);
                context.Marks.AddRange(marks);
            }

            if (context.ChangeTracker.HasChanges()) await context.SaveChangesAsync();
        }
    }
}